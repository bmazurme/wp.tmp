import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';

import ProjectEdit from '../ProjectEdit';
import ProjectUsersEdit from '../ProjectUsersEdit';

import BoardHeader from '../BoardHeader';
import Popup from '../Popup';
import Modules from '../Modules';

import { ProjectType } from '../Workplace';

type TypeOption = { label: string, value: string };

export default function Board({
  project, options, filter, setFilter,
} : {
  project: ProjectType | null, options: any, filter: any, setFilter: any,
}) {
  const [popupEditProject, setPopupEditProject] = useState(false);
  const [popupEditUsers, setPopupEditUsers] = useState(false);
  const [mods, setMods] = useState<string[]>(project?.modules ?? []);
  const openPopupEditProject = () => setPopupEditProject(true);
  const closePopupEditProject = () => setPopupEditProject(false);
  const openPopupEditUsers = () => setPopupEditUsers(true);
  const closePopupEditUsers = () => setPopupEditUsers(false);

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

        <button
          aria-label="Users"
          className="button_users"
          type="button"
          onClick={openPopupEditUsers}
        />
        <button
          aria-label="Menu"
          className="button_menu"
          type="button"
          onClick={openPopupEditProject}
        />
      </div>
      <Modules modules={mods} />
      <Popup
        isOpen={popupEditUsers}
        onClose={closePopupEditUsers}
        children={(<ProjectUsersEdit />)}
      />
      <Popup
        isOpen={popupEditProject}
        onClose={closePopupEditProject}
        children={(<ProjectEdit />)}
      />
    </>
  );
}
