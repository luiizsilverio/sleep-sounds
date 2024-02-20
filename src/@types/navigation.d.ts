import { PlaylistProps } from "../utils/playlist";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      PlaylistDetail: { data: PlaylistProps };
    }
  }
}