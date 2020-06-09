<script>
import { isNil } from 'lodash';
import TrackingWidget from './TrackingWidget';
import { InputDebounced, Modal, Button } from '../../../../../shared/components';
import {
    TrackingLink,
    ModalContents,
    ModalTitle,
    Inputs,
    InputCont,
    InputLabel,
    Actions,
    SectionTitle } from './Styles';
let modal, isOpen=false;
export let issue;
export let updateIssue;
</script>
    <SectionTitle>
        Original Estimate (hours)
    </SectionTitle>
    <InputDebounced
        placeholder="Number"
        filter={/^\d{0,6}$/}
        value={isNil(issue['estimate']) 
            ? '' 
            : issue['estimate']}
        onChange={stringValue => {
            const value = stringValue.trim() 
                ? Number(stringValue) 
                : null;
            updateIssue({ ['estimate']: value });
        }}
    />
    <SectionTitle>
        Time Tracking
    </SectionTitle>
    <TrackingLink 
        onClick={()=>isOpen=true}
    >
        <TrackingWidget 
            {issue} 
        />
        <Modal
            isOpen={isOpen}
            testid="modal:tracking"
            width={400}
            bind:this={modal}
            tellParentToClose={()=>isOpen=false}
        >
            <ModalContents>
                <ModalTitle>
                    Time tracking
                </ModalTitle>
                <TrackingWidget 
                    {issue}
                />
                <Inputs>
                    <InputCont>
                        <InputLabel>
                            Time spent (hours)
                        </InputLabel>
                        <InputDebounced
                            placeholder="Number"
                            filter={/^\d{0,6}$/}
                            value={isNil(issue['timeSpent']) 
                                ? '' 
                                : issue['timeSpent']}
                            onChange={stringValue => {
                                const value = stringValue.trim() 
                                    ? Number(stringValue) 
                                    : null;
                                updateIssue({ ['timeSpent']: value });
                            }}
                        />
                    </InputCont>
                    <InputCont>
                        <InputLabel>
                            Time remaining (hours)
                        </InputLabel>
                        <InputDebounced
                            placeholder="Number"
                            filter={/^\d{0,6}$/}
                            value={isNil(issue['timeRemaining']) ? '' : issue['timeRemaining']}
                            onChange={stringValue => {
                                const value = stringValue.trim() 
                                    ? Number(stringValue) 
                                    : null;
                                updateIssue({ ['timeRemaining']: value });
                            }}
                        />
                    </InputCont>
                </Inputs>
                <Actions>
                    <Button 
                        variant="primary" 
                        onClick={()=>isOpen=false}
                    >
                        Done
                    </Button>
                </Actions>
            </ModalContents>
        </Modal>
    </TrackingLink>
    