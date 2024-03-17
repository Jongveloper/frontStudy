import { useNavigate } from "react-router-dom";
import Button from "./shared/components/NavigateButton";
import { ROUTES } from "../../common/constants/route";

const Navigation = () => {
  const navigate = useNavigate();

  const handleClickRoute = (path: string) => () => {
    navigate(path)
  }

  return (
    <div>
      {ROUTES.map(({ key, path, component }) => (
        <div key={key}>
          <Button
            key={path}
            onClick={handleClickRoute(path)}
            buttonText={component}
          />
        </div>
      ))}
    </div>
  )
}

export default Navigation;
