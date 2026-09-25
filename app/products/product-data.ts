import catalogue from './catalogue.json';

export type CatalogueProduct = {
  pid: number;
  title: string;
  image: string;
  content: string;
  subtitle: string;
  categoryId: number;
  categoryName: string;
};

export const products: CatalogueProduct[] = catalogue.flatMap((category) =>
  category.products.map((product) => ({
    ...product,
    categoryId: category.id,
    categoryName: category.name,
  })),
);

export function getProduct(id: string) {
  return products.find((product) => String(product.pid) === id);
}

export function getRelatedProducts(product: CatalogueProduct) {
  return products
    .filter(
      (candidate) =>
        candidate.categoryId === product.categoryId &&
        candidate.pid !== product.pid,
    )
    .slice(0, 3);
}

export function productHref(id: string | number) {
  return `/products/${id}`;
}
