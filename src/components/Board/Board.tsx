import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';

import BoardHeader from '../BoardHeader';
import Modules from '../Modules';

import { TypeProject } from '../Workplace';

type TypeOption = { label: string, value: string };

export default function Board({
  project, options, filter, setFilter,
} : {
  project: TypeProject | null, options: any, filter: any, setFilter: any,
}) {
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
        ? a : null)).filter((x) => x);
    setFilter(f);
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
