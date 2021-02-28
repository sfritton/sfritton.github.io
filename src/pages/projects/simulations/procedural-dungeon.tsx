import React, { useRef } from 'react';
import { PageProps } from 'gatsby';
import Layout from '../../../components/Layout';
import { Simulation } from '../../../components/Simulation';
import { proceduralDungeon } from '../../../simulations/procedural-dungeon';
import { COLOR_ENTRANCE, COLOR_EXIT } from '../../../simulations/procedural-dungeon/constants';
import styles from './dungeon.module.css';
import { Button } from '../../../components/Button';

const ProceduralDungeonPage: React.FC<PageProps> = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <Layout title="Dungeon Generator">
      <div className={styles.content}>
        <h1>Dungeon Generator</h1>A dungeon created using procedural generation. Start from the
        light blue room and try to navigate to the dark blue room. If a locked door blocks your
        path, find a key to open it.
        <div className={styles.legend}>
          <div>
            <span className={styles.swatch} style={{ background: COLOR_ENTRANCE }} /> Entrance
          </div>
          <div>
            <span className={styles.swatch} style={{ background: COLOR_EXIT }} /> Exit
          </div>
          <div>
            <img className={styles.swatch} src="/images/dungeon_lock.png" /> Locked door
          </div>
          <div>
            <img className={styles.swatch} src="/images/dungeon_key.png" /> Key
          </div>
        </div>
        <h2>Demo</h2>
        <div className={styles.simulation}>
          <Simulation sketch={proceduralDungeon(buttonRef)} />
        </div>
        <Button ref={buttonRef}>Generate a new dungeon</Button>
        <h2>How it works</h2>
        <h3>Generating rooms</h3>
        The algorithm starts with a single large room. It chooses a random point and adds a wall to
        split the room into two new rooms. It repeats this process with each room until the dungeon
        is sufficiently complex.
        <div className={styles.rooms}>
          <img src="/images/dungeon_0.png" />
          <img src="/images/dungeon_1.png" />
          <img src="/images/dungeon_2.png" />
          <img src="/images/dungeon_3.png" />
        </div>
        <h3>Adding doors</h3>
        Next, the algorithm chooses a room to be the entrance. It creates a door to each neighbor at
        a random point along the shared wall. For each newly connected room, the process is
        repeated. The result is a tree structure of rooms starting from the dungeon entrance.
        <h3>Choosing an exit</h3>
        The dungeon exit is chosen to be the room at the greatest depth, that is the furthest number
        of doors from the dungeon entrance. There is only one path from the entrance to the exit.
        <h3>Placing keys &amp; locks</h3>
        The dungeon will have between one and four locked doors, each along the direct path from the
        entrance to the exit. For each locked door, a key is placed in a room further up the tree.
      </div>
    </Layout>
  );
};

export default ProceduralDungeonPage;
