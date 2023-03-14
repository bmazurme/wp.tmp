import React from 'react';

type TypeContainer = Record<string, string | number | boolean>;
type TypeItem = {
  id: number;
  container: TypeContainer;
  handleClick: (id: number) => void;
};

function Container({ id, container, handleClick }: TypeItem) {
  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,jsx-a11y/no-noninteractive-element-interactions
    <li
      id={id.toString()}
      className={`accordion__container${container.data ? ' accordion__container_opened' : ''}`}
      onClick={() => handleClick(id)}
    >
      <div className={`accordion__title${container.data ? ' accordion__title_opened' : ''}`}>
        <span className={`accordion__icon ${container.data && 'accordion__icon_opened'}`} />
        <h6 className="accordion__title">{container.title}</h6>
      </div>
      {container.data && <div className="accordion__content">{container.content}</div>}
    </li>
  );
}

export default function Accordion({ data }: { data: TypeContainer[] }) {
  const initData = data.map((x) => ({ ...x, data: false }));
  const [containers, setContainers] = React.useState<TypeContainer[]>(initData);
  const handlerClick = (id: number) => {
    const arr = containers.map((box, i) => ({ ...box, data: id === i ? !box.data : false }));

    setContainers(arr);
  };

  return (
    <ul className="accordion">
      {containers.map((container: TypeContainer, index: number) => (
        <Container
          id={index}
          key={index}
          container={container}
          handleClick={handlerClick}
        />
      ))}
    </ul>
  );
}
