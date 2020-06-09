<script>
    import { copyToClipboard } from '../../../shared/utils/browser.js';
    import Button from '../../../shared/components';
    let isLinkCopied = false;
    const handleLinkCopy = () => {
        isLinkCopied = true;
        setTimeout(() => isLinkCopied=false, 2000);
        copyToClipboard(window.location.href);
    };
</script>

<Button icon="link" onClick={handleLinkCopy}>
    {isLinkCopied ? 'Link Copied' : 'Copy link'}
</Button>
