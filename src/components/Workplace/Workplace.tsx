/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useErrorHandler } from 'react-error-boundary';

import Sidebar from '../Sidebar';
import Board from '../Board';
import Input from '../Input';
import Button from '../Button';
import Popup from '../Popup';

import projects from '../../mock/projects';
import options from '../../mock/options';

export type ProjectType = {
  id: number;
  name: string;
  owner: number;
  address: string;
  likes: never[];
  users: number[];
  modules: string[];
};

type FormPayload = {
  name: string;
};

const inputs = [
  {
    name: 'name',
    label: 'Name',
    pattern: {
      value: /^[a-z0-9_-]{3,15}$/,
      message: 'Name is invalid',
    },
    required: true,
    autoComplete: 'name',
  },
];

export default function Workplace() {
  const errorHandler = useErrorHandler();
  const [items, setItems] = useState(projects);
  const [filter, setFilter] = useState([options[0], options[1], options[2]]);
  const [popupAddProject, setPopupAddProject] = useState(false);
  const [project, setProject] = useState<ProjectType | null>(null);
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);
  const openProject = (currentProject: ProjectType) => {
    setProject(currentProject);
  };

  const openPopupAddProject = () => {
    setPopupAddProject(true);
  };
  const closePopupAddProject = () => {
    setPopupAddProject(false);
  };

  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data);
      setItems([{
        id: items.length + 1,
        name: data.name,
        owner: 0,
        address: '',
        likes: [],
        users: [],
        modules: [],
      }, ...items]);
      closePopupAddProject();
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  return (
    <section>
      <div className="board">
        <div className={`board__sidebar${sidebar ? ' board__sidebar_hidden' : ''}`}>
          <Sidebar
            openPopupAddProject={openPopupAddProject}
            openProject={openProject}
            sidebar={sidebar}
            toggleSidebar={toggleSidebar}
            project={project}
            items={items}
          />
        </div>
        <div className="board__main">
          {project
            ? <Board project={project} options={options} filter={filter} setFilter={setFilter} />
            : <div>Tmp</div>}
        </div>
      </div>
      <Popup
        isOpen={popupAddProject}
        onClose={closePopupAddProject}
        children={(
          <>
            <h2 className="title">New project</h2>
            <form onSubmit={onSubmit}>
              {inputs.map((input) => (
                <Controller
                  key={input.name}
                  name={input.name as keyof FormPayload}
                  rules={{
                    pattern: input.pattern,
                    required: input.required,
                  }}
                  control={control}
                  render={({ field, fieldState }) => (
                    <Input
                      {...field}
                      {...input}
                      className="input inbox__input"
                      errorText={fieldState.error?.message}
                    />
                  )}
                />
              ))}
              <Button submit isValid className="button_submit" value="Create" />
            </form>
          </>
        )}
      />
    </section>
  );
}
