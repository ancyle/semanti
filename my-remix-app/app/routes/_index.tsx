import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Grid } from "semantic-ui-react";
import CategoryList from "~/components/categoryList";
import Navi from "~/components/navi";
import ProductList from "~/components/productList";

import { useOptionalUser } from "~/utils";

export const meta: V2_MetaFunction = () => [{ title: "Remix App" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <div>
      <Grid celled>
        <Grid.Row>
          <Grid.Column>
            <Navi />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={3}>
            <CategoryList />
          </Grid.Column>
          <Grid.Column width={12}>
            <ProductList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
