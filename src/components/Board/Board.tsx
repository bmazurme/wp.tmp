import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Select from 'react-select';

import BoardHeader from '../BoardHeader';
import Modules from '../Modules';
import makeDataSelector from '../../store/makeDataSelector';
import options from '../../mock/options';

type TypeOption = { label: string, value: string };

const projectSelector = makeDataSelector('project');

export default function Board() {
  const { project } = useSelector(projectSelector);
  const [filter, setFilter] = useState<TypeOption[]>([options[0], options[1], options[2]]);
  const [mods, setMods] = useState<string[]>(project?.modules ?? []);
  const { control } = useForm({
    defaultValues: {
      ReactSelect: filter,
    },
  });

  const typeOn = (f: unknown) => {
    const k = f as TypeOption[];
    const filteredModules = project?.modules
      .map((a: string) => (k.some((d) => d.label === a)
        ? a : null)).filter((x: string | null) => x);
    setFilter(f as TypeOption[]);
    setMods(filteredModules as string[]);
  };

  useEffect(() => { typeOn(filter); }, [project]);

  return (
    <>
      <BoardHeader project={project} />
      <div className="main__title">
        <Controller
          name="ReactSelect"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              onChange={(filters) => typeOn(filters)}
              value={filter}
              closeMenuOnSelect={false}
              isMulti
              options={options}
            />
          )}
        />
      </div>
      <Modules modules={mods} />
    </>
  );
}
