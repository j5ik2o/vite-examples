import { render } from "vike/abort";
import { PageContextServer } from "vike/types";

const guard = (pageContext: PageContextServer & PageContextCustom) => {
  if (!pageContext.user) {
    throw render("/login");
  }
  if (!pageContext.user.isAdmin) {
    throw render(403, { notAdmin: true });
  }
};

export default guard;
