import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";


export default function BorderNames(props) {



  return (
    <Link to={`/search/${props.border}`}>
      <Box
        as="span"
        boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 8px 0px"
        padding="0.2rem 1.5rem"
        textDecoration="none"
      >
        {props.border}
      </Box>
    </Link>
  );
}
