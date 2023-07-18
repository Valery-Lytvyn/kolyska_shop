import "./pageTitle.scss";

interface PageTitleProps {
  text: string;
}
function PageTitle({ text }: PageTitleProps) {
  return <h2 className="page-title">{text}</h2>;
}

export default PageTitle;
