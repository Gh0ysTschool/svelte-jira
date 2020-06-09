<script>
    import { isNil } from 'lodash';
    import {
        StyledTrackingWidget,
        WatchIcon,
        Right,
        BarCont,
        Bar,
        Values } from './Styles';
    export let issue;
    const calculateTrackingBarWidth = ({ timeSpent, timeRemaining, estimate }) => {
        if (!timeSpent) {
            return 0;
        }
        if (isNil(timeRemaining) && isNil(estimate)) {
            return 100;
        }
        if (!isNil(timeRemaining)) {
            return (timeSpent / (timeSpent + timeRemaining)) * 100;
        }
        if (!isNil(estimate)) {
            return Math.min((timeSpent / estimate) * 100, 100);
        }
    };
</script>
<StyledTrackingWidget>
    <WatchIcon 
        type="stopwatch" 
        size={26} 
        top={-1} />
    <Right>
        <BarCont>
            <Bar 
                width={calculateTrackingBarWidth(issue)} 
            />
        </BarCont>
        <Values>
            <div>
                {issue.timeSpent 
                    ? `${issue.timeSpent}h logged` 
                    : 'No time logged'}
            </div>
            {#if (!isNil(issue.timeRemaining))}
                <div>
                    {`${issue.timeRemaining}h remaining`}
                </div>;
            {/if}
            {#if (!isNil(issue.estimate))} 
                <div>
                    {`${issue.estimate}h estimated`}
                </div>;
            {/if}
        </Values>
    </Right>
</StyledTrackingWidget>