interface Item {
  id?: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface CollectionPreviewProps {
  id?: number;
  title: string;
  routeName?: string;
  items: Array<Item>;
}
