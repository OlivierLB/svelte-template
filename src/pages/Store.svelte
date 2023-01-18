<script lang="ts">
    import { _ } from 'svelte-i18n'
    import UserInfoStore from "../store/userInfo";
    import BInput from "../components/Bloxas/BInput.svelte";

    let token :string;

    const onInput = (e) => {
        UserInfoStore.setToken(e.detail.value)
    }
</script>

<main>
    {$UserInfoStore.token}
    <BInput
        name={$_('input.token')}
        bind:value={token}
        on:input={onInput}
    />
</main>
