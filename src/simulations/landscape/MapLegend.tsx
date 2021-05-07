import React from 'react';
import { allBiomes } from './Biome';
import { ELEVATION_COLORS, PRECIPITATION_COLORS, TEMPERATURE_COLORS } from './constants';
import { MapType } from './types';
import styles from './legend.module.css';

interface Props {
  mapType: MapType;
}

const colorsByMapType: Record<MapType, string[]> = {
  elevation: ELEVATION_COLORS,
  precipitation: PRECIPITATION_COLORS,
  temperature: TEMPERATURE_COLORS,
  biome: [],
};

export const MapLegend: React.FC<Props> = ({ mapType }) => {
  if (mapType === 'biome')
    return (
      <div>
        <b>Biomes</b>
        <ul className={styles.biomeList}>
          {allBiomes.map(({ title, color }) => (
            // @ts-expect-error
            <li key={title} style={{ '--biome-color': color }}>
              {title}
            </li>
          ))}
        </ul>
      </div>
    );

  const colors = colorsByMapType[mapType];

  return (
    <div>
      <div className={styles.labels}>
        <div>Low</div>
        <div>High</div>
      </div>
      <div className={styles.gradientLegend}>
        {colors.map((color, index) => {
          if (index === 0) return null;

          return (
            <div
              key={`${color}-${index}`}
              className={styles.gradientChunk}
              // @ts-expect-error
              style={{ '--start-color': colors[index - 1], '--end-color': color }}
            />
          );
        })}
      </div>
    </div>
  );
};
