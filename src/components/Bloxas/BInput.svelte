<script lang="ts">
    import BIcon from "./BIcon.svelte";
    import { createEventDispatcher } from 'svelte';

    enum inputType {
        text = 'text',
        textarea = 'textarea',
        select = 'select',
        date = 'date'
    }
    interface OptionType {
        name: String,
        value: String
    }

    const dispatch = createEventDispatcher();

    export let icon :String = '';
    export let name :String;
    export let placeholder :String = '';
    export let type :inputType = inputType.text;
    export let options :Array<OptionType> = [];
    export let value :String = '';

    function input() {
        dispatch('input', {
            value: value
        })
    }
</script>

<main class="global">
    <div class="name">
        {name}
    </div>
    <div class="custom-input">
        {#if icon.length > 0}
            <div class="icon">
                <BIcon
                    name={icon}
                />
            </div>
        {/if}
        <div class="input">
            {#if type === inputType.text}
                <input
                    class="final-element"
                    placeholder={placeholder}
                    bind:value={value}
                    on:input={input}
                />
            {/if}
            {#if type === inputType.textarea}
                <textarea
                    class="final-element"
                    placeholder={placeholder}
                    bind:value={value}
                ></textarea>
            {/if}
            {#if type === inputType.select}
                <select
                    class="final-element"
                    bind:value={value}
                >
                    <option value="" disabled selected>
                        {placeholder}
                    </option>
                    {#each options as option}
                        <option value={option.value}>{option.name}</option>
                    {/each}
                </select>
            {/if}
            {#if type === inputType.date}
                <input
                    class="final-element"
                    type="date"
                    bind:value={value}
                />
            {/if}
        </div>
    </div>
</main>

<style lang="scss">
  @import "./src/styles/_loader.scss";
  .global {
    width: 100%;
    flex: 1 0 30%;
    .name {
      font-size: $font-medium;
    }
    .custom-input {
      min-height: 30px;
      border-radius: $radius;
      border: solid $border $primary;
      width: 100%;
      background-color: $light;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      text-align: center;
      align-content: center;
      align-items: center;
      .icon {
        width: 40px;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        align-items: center;
        color: $primary;
      }
      .input {
        width: calc(100% - 40px);
        height: 100%;
        .final-element {
          padding: unset;
          margin: unset;
          width: 100%;
          height: 100%;
          border: unset;
          text-indent: $space-small;
          background-color: $light;
          font-size: $font-medium;
          color: $dark;
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
  textarea {
    resize: none;
  }

  select {
  }
</style>
