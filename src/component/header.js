import MLink from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar 
      className="toolbar"
      sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Typography
          component="h2"
          variant="h3"
          color="Orange"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
      </Toolbar>
      <Toolbar
        className="toolbar"
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-evenly", overflowX: "auto", marginTop: "2em" }}
      >
        {sections.map((section) => (
          <Link to={section.url} key={section.title}>
            <MLink
              color={'#fafafa'}
              noWrap
              variant="body"
              sx={{ p: 2, flexShrink: 0 }}
            >
              {section.title}
            </MLink>
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;