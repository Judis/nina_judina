import { BlocksRenderer } from "@strapi/blocks-react-renderer";

type Props = {
  content: any;
};

export default function StrapiBlocks({ content }: Props) {
  return <BlocksRenderer content={content} />;
}