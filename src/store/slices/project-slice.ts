import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type TypeProjects = { project: TypeProject | null, projects: TypeProject[] };

const slice = createSlice({
  name: 'project',
  initialState: {
    project: null,
    projects: [],
  } as TypeProjects,
  reducers: {
    setProject: (
      state,
      { payload: project }: PayloadAction<TypeProject>,
    ) => ({ ...state, project }),
    setProjects: (
      state,
      { payload: projects }: PayloadAction<TypeProject[]>,
    ) => ({ ...state, projects }),
  },
});

export const { setProject, setProjects } = slice.actions;

export default slice.reducer;
