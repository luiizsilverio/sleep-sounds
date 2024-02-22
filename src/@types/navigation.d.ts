import { PlaylistProps } from "../utils/playlist";

export interface TabMainRoutes {
  discover: undefined;
  composer: undefined;
  profile: undefined;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      TabMain: TabMainRoutes,
      PlaylistDetail: { data: PlaylistProps }
    }
  }
}