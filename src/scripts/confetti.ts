// Unitless constants that can be fine-tuned until the animation looks "right"
const EXPLOSION_STRENGTH = 2000;
const AIR_RESISTANCE = -6;
const AIR_RESISTANCE_VARIANCE = AIR_RESISTANCE / 2;
const GRAVITY = 1000;
const EXPLOSION_RADIUS = 65;
const EXPLOSION_CENTER = { x: 200, y: 150 };

const CONFETTI_COLORS = ['#e75d5d', '#eb8a47', '#eec42e', '#84cda0', '#8aaad8', '#a98bc7'];

interface Coordinates {
  x: number;
  y: number;
}

interface Particle {
  draw(): void;
  position: Coordinates;
  velocity: Coordinates;
  airResistance: number;
  size: number;
  tilt: number;
  tiltAngle: number;
  tiltAngleIncrement: number;
  instance: ConfettiMaker;
}

const getInitialPosition = (confettiCenter: Coordinates = EXPLOSION_CENTER): Coordinates => {
  const r = EXPLOSION_RADIUS * Math.sqrt(Math.random());
  const theta = Math.random() * 2 * Math.PI;

  return {
    x: confettiCenter.x + r * Math.cos(theta),
    y: confettiCenter.y + r * Math.sin(theta),
  };
};

/** Explode outward with a random velocity */
const getInitialVelocity = (
  particlePosition: Coordinates,
  confettiCenter: Coordinates = EXPLOSION_CENTER,
): Coordinates => {
  const fromCenter = {
    x: particlePosition.x - confettiCenter.x,
    y: particlePosition.y - confettiCenter.y + 30, // the explosion is centered a bit lower so that it's aimed up
  };

  const magnitude = Math.sqrt(fromCenter.x * fromCenter.x + fromCenter.y * fromCenter.y) || 1; // guards against dividing by 0

  // get the unit vector
  const direction = {
    x: fromCenter.x / magnitude,
    y: fromCenter.y / magnitude,
  };

  // choose a random speed
  const speed = Math.random() * EXPLOSION_STRENGTH;

  return {
    x: direction.x * speed,
    y: direction.y * speed,
  };
};

/** Based on two timestamps, determine the length of the frame */
const calculateFrameLength = (currMS: number, prevMS = currMS) => (currMS - prevMS) / 1000;

function randomFromTo(from: number, to: number) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

// Original confetti sourced from: https://jsfiddle.net/hcxabsgh/

export class ConfettiMaker {
  private context: CanvasRenderingContext2D | null;
  private readonly canvas: HTMLCanvasElement;
  private readonly center?: Coordinates;
  private readonly duration = 3;
  private readonly maxParticles: number;
  private particles: Particle[] = [];
  private readonly delay: number;
  private elapsedTime = 0;
  private opacity = 1;
  private tiltAngle = 0;
  private isAnimationComplete = true;
  private animationHandler: number | undefined;
  private stopConfettiTimer: number | undefined;

  constructor(
    canvas: HTMLCanvasElement,
    config?: {
      maxParticles?: number;
      delay?: number;
      center?: Coordinates;
    },
  ) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.maxParticles = config?.maxParticles ?? 100;
    this.delay = config?.delay ?? 0;
    this.center = config?.center;
  }

  public get width() {
    return this.canvas.width;
  }
  public get height() {
    return this.canvas.height;
  }

  public createConfettis() {
    this.particles = [];
    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push(this.createConfettiParticle(i));
    }
  }

  public start() {
    this.isAnimationComplete = false;
    this.elapsedTime = 0;
    this.opacity = 1;
    let prevMS: number | undefined = undefined;

    const run = (currMS: number) => {
      if (this.isAnimationComplete) return;

      const deltaT = calculateFrameLength(currMS, prevMS);
      prevMS = currMS;

      this.animationHandler = requestAnimationFrame(run);
      this.draw();
      this.update(deltaT);
    };

    setTimeout(() => {
      this.animationHandler = requestAnimationFrame(run);
    }, this.delay);

    this.stopConfettiTimer = setTimeout(() => {
      this.stopConfetti();
    }, this.delay + 5000);
  }

  private createConfettiParticle(index: number): Particle {
    const position = getInitialPosition(this.center);
    const velocity = getInitialVelocity(position, this.center);
    let size = randomFromTo(10, 30);
    let tilt = Math.floor(Math.random() * 10) - 10;
    let tiltAngleIncrement = Math.random() * 0.07 + 0.05;
    let tiltAngle = 0;
    const color = CONFETTI_COLORS[index % CONFETTI_COLORS.length];

    const airResistance = AIR_RESISTANCE - AIR_RESISTANCE_VARIANCE * Math.random();

    return {
      airResistance,
      instance: this,
      draw() {
        if (!this.instance.context) return;

        this.instance.context.beginPath();
        this.instance.context.lineWidth = this.size / 2;
        this.instance.context.strokeStyle = color;
        this.instance.context.moveTo(this.position.x + this.tilt + this.size / 4, this.position.y);
        this.instance.context.lineTo(
          this.position.x + this.tilt,
          this.position.y + this.tilt + this.size / 4,
        );
        this.instance.context.stroke();
      },
      position,
      velocity,
      size,
      tilt,
      tiltAngle,
      tiltAngleIncrement,
    };
  }

  private draw() {
    this.context?.clearRect(0, 0, this.width, this.height);
    if (this.context) this.context.globalAlpha = this.opacity;

    for (let i = 0; i < this.maxParticles; i++) {
      this.particles[i].draw();
    }
  }

  private update(deltaT: number) {
    if (this.isAnimationComplete) return;

    let remainingFlakes = 0;
    let particle: Particle;
    this.tiltAngle = this.tiltAngle + 0.1;
    this.elapsedTime += deltaT;

    const remainingTime = this.duration - this.elapsedTime;

    // start to fade out in last 2 sec of animation
    if (remainingTime <= 2) {
      // a number between 0 - 1
      const percent = Math.max(remainingTime / 2, 0);

      // use an "ease-in" timing fuction so the fade out accelerates over time
      this.opacity = percent * percent;
    }

    for (let i = 0; i < this.maxParticles; i++) {
      particle = this.particles[i];

      this.stepParticle(particle, i, deltaT);

      if (particle.position.y <= this.height) {
        remainingFlakes++;
      }
    }

    if (remainingFlakes === 0) {
      this.stopConfetti();
    }
  }

  private stepParticle(particle: Particle, particleIndex: number, deltaT: number) {
    // Calculate forces acting on the particle:
    // 1. Air resistance is proportional and opposite the velocity
    // 2. Gravity is a constant downward force
    const acceleration: Coordinates = {
      x: particle.velocity.x * particle.airResistance,
      y: particle.velocity.y * particle.airResistance + GRAVITY,
    };

    particle.velocity.x += acceleration.x * deltaT;
    particle.velocity.y += acceleration.y * deltaT;

    particle.position.x += particle.velocity.x * deltaT;
    particle.position.y += particle.velocity.y * deltaT;

    particle.tiltAngle += particle.tiltAngleIncrement;
    particle.tilt = Math.sin(particle.tiltAngle - particleIndex / 3) * 15;
  }

  public clearTimers() {
    clearTimeout(this.animationHandler);
    clearTimeout(this.stopConfettiTimer);
  }

  private stopConfetti() {
    this.isAnimationComplete = true;
    this.context?.clearRect(0, 0, this.width, this.height);
  }

  public dispose() {
    this.clearTimers();
    this.stopConfetti();
  }
}

export const canvas = document.querySelector<HTMLCanvasElement>('canvas.confetti');

export const confetti = canvas
  ? new ConfettiMaker(canvas, {
      center: { x: canvas.width / 2, y: canvas.height / 4 },
    })
  : undefined;
