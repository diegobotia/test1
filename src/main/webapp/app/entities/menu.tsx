import React from 'react';

import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/publisher">
        Publisher
      </MenuItem>
      <MenuItem icon="asterisk" to="/author">
        Author
      </MenuItem>
      <MenuItem icon="asterisk" to="/client">
        Client
      </MenuItem>
      <MenuItem icon="asterisk" to="/book">
        Book
      </MenuItem>
      <MenuItem icon="asterisk" to="/borrowed-book">
        Borrowed Book
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
