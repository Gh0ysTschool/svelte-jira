<script>
    import {Button, Tooltip} from '../../../shared/components'; 
    import {FeedbackDropdown, FeedbackImageCont, 
            FeedbackImage, FeedbackParagraph, 
            StyledTooltip} from './Styles';
    export let toggle = false;
</script>
<Tooltip {toggle}
    width={300}
    {...$$restProps}>
    <FeedbackDropdown>
      <FeedbackImageCont>
        <FeedbackImage src='./assets/feedback.png' alt="Give feedback" />
      </FeedbackImageCont>

      <FeedbackParagraph>
        This simplified Jira clone is built with Svelte on the front-end and Node/TypeScript on the
        back-end.
      </FeedbackParagraph>

      <FeedbackParagraph>
        {'Read more on my website or reach out via '}
        <a href="gh0yst.professional@gmail.com">
          <strong>gh0yst.bpudsey.co</strong>
        </a>
      </FeedbackParagraph>

      <a href="https://bradleypudsey.now.sh/" target="_blank" rel="noreferrer noopener">
        <Button variant="primary">Visit Website</Button>
      </a>

      <a href="https://github.com/Gh0ysTschool/jira_clone" target="_blank" rel="noreferrer noopener">
        <Button style={{ marginLeft: 10 }} icon="github">
          Github Repo
        </Button>
      </a>
    </FeedbackDropdown>
</Tooltip>