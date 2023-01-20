<script>
  import { onMount } from "svelte";
  import {getBourbon} from "../services/thecocktaildb/bourbon";

  let bourbon
  onMount( async () => {
    getBourbon("Bourbon")
      .then(data => {
        bourbon = data
      }).catch(error => {
        bourbon = error
      });
  })
</script>

<main>
  {JSON.stringify(bourbon)}
</main>
