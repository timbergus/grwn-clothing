type Section = {
  id: number;
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
};

type DirectoryState = {
  sections: Array<Section>;
};

type DirectoryProps = {
  id?: number;
};
