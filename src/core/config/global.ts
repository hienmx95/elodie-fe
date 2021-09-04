export interface GlobalState {
  loading: boolean;
  language: string;
  fallbackLanguage: string;
  toggleSideBar: boolean;
}

export const initialGlobalState: GlobalState = {
  loading: false,
  language: 'vi',
  fallbackLanguage: 'vi',
  toggleSideBar: true,
};
