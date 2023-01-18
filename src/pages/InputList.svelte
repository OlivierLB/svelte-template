<script lang="ts">
    import { _ } from 'svelte-i18n'
    import BInput from "../components/Bloxas/BInput.svelte";
    let options = [
        {
            name : 'Le name',
            value: 'la value'
        }
    ];
    let input1 :String;
    let input2 :String;
    let input3 :String;
    let input4 :String;
    let input5 :String;
    let input6 :String;
</script>

<main>
    <h1>Liste des input</h1>
    <div class="input-list">
        <BInput
            name={$_('input.first')}
            bind:value={input1}
        />
        <BInput
            name={$_('input.second')}
            icon="AppleWholeIcon"
            bind:value={input2}
        />
        <BInput
            name={$_('input.third')}
            icon="DuplicateIcon"
            placeholder={$_('input.third')}
            bind:value={input3}
        />
        <BInput
            name={$_('input.fourth')}
            icon="HikingIcon"
            placeholder={$_('input.fourth')}
            type="textarea"
            bind:value={input4}
        />
        <BInput
            name={$_('input.fifth')}
            icon="MagicWandIcon"
            placeholder={$_('input.fifth')}
            type="select"
            options={options}
            bind:value={input5}
        />
        <BInput
            name={$_('input.sixth')}
            type="date"
            icon="MugHotAltIcon"
            bind:value={input6}
        />
    </div>
    <div class="result">
        <div>
            {$_('input.first')}: {input1}
        </div>
        <div>
            {$_('input.second')}: {input2}
        </div>
        <div>
            {$_('input.third')}: {input3}
        </div>
        <div>
            {$_('input.fourth')}: {input4}
        </div>
        <div>
            {$_('input.fifth')}: {input5}
        </div>
        <div>
            {$_('input.sixth')}: {input6}
        </div>
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
  .result {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
</style>
