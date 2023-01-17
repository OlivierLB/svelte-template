<script>
  import BInput from "../components/Bloxas/BInput.svelte";
</script>

<main>
    <h1>Liste des input</h1>
    <div class="input-list">
        <BInput
            name="Premier champs"
        />
        <BInput
            name="Second champs"
            icon="AppleWholeIcon"
        />
        <BInput
            name="Troisième champs"
            icon="DuplicateIcon"
            placeholder="C'est le champs 3"
        />
        <BInput
            name="Quatrième champs"
            icon="HikingIcon"
            placeholder="C'est un textarea"
            type="textarea"
        />
    </div>
</main>

<style lang="scss">
@import "./src/styles/_loader.scss";
.input-list {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: $space-normal;
}
</style>
