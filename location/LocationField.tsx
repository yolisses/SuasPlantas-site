/* eslint-disable prefer-destructuring */
import { GrClose } from 'react-icons/gr';
import { ChangeEvent, useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { Spinner } from '../common/Spinner';
import { green700 } from '../common/colors';
import { LocationFieldMap } from './LocationFieldMap';
import { useMapImport } from './leaflet/MapImportContext';
import { LocationFieldSearch } from './LocationFieldSearch';

export interface SelectLocationResult{
    radius?:number
    position:[number, number]
}

interface LocationFieldProps{
    text:string
    title?:string
    loading?:boolean
    initialRadius?:number
    radiusOptions?:number[]
    initialLocation?:[number, number]
    submit:(result:SelectLocationResult)=>Promise<boolean>
}

export function LocationField({
  text,
  title,
  submit,
  loading,
  initialRadius,
  radiusOptions,
  initialLocation,
}:LocationFieldProps) {
  const { rlImports } = useMapImport();
  if (!rlImports) return null;
  const [active, setActive] = useState(false);
  const [radius, setRadius] = useState(initialRadius);
  // this variable is mutable, to support fast changes on map move
  const [center, setCenter] = useState<[number, number]>([0, 0]);

  function handleOpen() {
    if (initialLocation) {
      center[0] = initialLocation[0];
      center[1] = initialLocation[1];
    }
    setActive(true);
  }

  function handleChangeRadius(e:ChangeEvent<HTMLSelectElement>) {
    setRadius(parseInt(e.target.value, 10));
  }

  function hancleClose() { setActive(false); }

  async function handleSubmit() {
    const success = await submit({ position: [...center], radius });
    setActive(!success);
  }

  useEffect(() => { setRadius(initialRadius); }, [initialRadius]);

  const circleRadius = radiusOptions ? radius : undefined;

  return (
    <div>
      <button onClick={handleOpen} className="secondary-button">
        <FaMapMarkerAlt size={20} color={green700} />
        {text || 'Selecionar local'}
      </button>
      {active && (
      <div
        className="fixed top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center bg-black bg-opacity-50"
        style={{ zIndex: 60 }}
      >
        <div className="flex flex-col max-h-screen bg-white w-full max-w-3xl rounded-none md:rounded-lg shadow-xl">
          <div className="px-2 pb-2">
            <div className="h-12 center-row justify-between">
              <div className="pl-1">{title || 'Selecionar localização'}</div>
              <button
                disabled={loading}
                onClick={hancleClose}
                className="icon-button"
              >
                <GrClose size={18} />
              </button>
            </div>
            <LocationFieldSearch setCenter={setCenter} />
          </div>
          {!!radiusOptions && (
          <div className="center-row px-2 gap-1">
            <span>
              Distância máxima
            </span>
            <select
              defaultChecked
              onChange={handleChangeRadius}
              className="secondary-button text-black bg-transparent"
            >
              {radiusOptions?.map((value) => (
                <option value={value} selected={value === radius}>
                  {value}
                  {' '}
                  Km
                </option>
              ))}
            </select>
          </div>
          )}
          <LocationFieldMap
            center={center}
            radius={circleRadius}
          />
          <div className="p-1 flex flex-row justify-end gap-4">
            <button
              disabled={loading}
              onClick={hancleClose}
              className="secondary-button h-12 flex-1 sm:flex-none px-5"
            >
              Cancelar
            </button>
            <button
              disabled={loading}
              onClick={handleSubmit}
              className="h-12 flex-1 sm:flex-none px-5 main-button"
            >
              {loading && <Spinner size={20} />}
              Salvar
            </button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
