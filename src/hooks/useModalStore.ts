import { create } from 'zustand';

interface ModalState {
  activeProjectId: string | null;
  isProjectModalOpen: boolean;
  openProjectModal: (projectId: string) => void;
  closeProjectModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  activeProjectId: null,
  isProjectModalOpen: false,
  openProjectModal: (projectId) => set({ activeProjectId: projectId, isProjectModalOpen: true }),
  closeProjectModal: () => set({ activeProjectId: null, isProjectModalOpen: false }),
}));
