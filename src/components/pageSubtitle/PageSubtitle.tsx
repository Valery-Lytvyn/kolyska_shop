import "./pageSubtitle.scss";

interface PageSubtitleProps {
  text: string;
}
function PageSubtitle({ text }: PageSubtitleProps) {
  return <h3 className="page-subtitle">{text}</h3>;
}

export default PageSubtitle;
