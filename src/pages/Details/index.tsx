import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Title, ToolLink } from "./styles";
import NavBar from "../../components/NavBar";
import { useToolCount } from "../../hooks/useToolCount";
import getTools from "../../services/getTools";
import Loading from "../../components/Loading";

interface IdProperty {
  id: string;
}

interface ToolDetailsProperty {
  title: string;
  link: string;
  description: string;
}

const Details = () => {
  const [filteredTool, setFilteredTool]: Array<any> = useState([]);

  const { getToolsCount } = useToolCount();
  const { id } = useParams<IdProperty>();

  const Section = ({ title, link, description }: ToolDetailsProperty) => {
    return (
      <div className="wrapper">
        <div className="section1">
          <img src="/images/undraw_online_organizer_ofxm.svg" alt="svg" />
        </div>
        <div className="section2">
          <Title>{title}</Title>
          <ToolLink href={link} target="_blank" rel="noreferrer">
            Access your tool
          </ToolLink>
          <p>{description}</p>
        </div>
      </div>
    );
  };

  const ToolDetail = () => {
    return (
      <>
        {filteredTool.map((item: any) => (
          <div key={item.id}>
            <Section
              title={item.title}
              link={item.link}
              description={item.description}
            />
          </div>
        ))}
      </>
    );
  };

  useEffect(() => {
    (async () => {
      const { data } = await getTools();
      const filtered = data.filter((tool: any) => tool.id === Number(id));
      setFilteredTool(filtered);
    })();
  }, [id]);
  return (
    <>
      <NavBar toolsCount={Number(getToolsCount())} isDetails />
      <Container>
        <h1>Tool Details</h1>
        {filteredTool.length < 1 ? <Loading /> : <ToolDetail />}
      </Container>
    </>
  );
};

export default Details;
