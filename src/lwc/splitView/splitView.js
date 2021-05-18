import { LightningElement, api } from 'lwc';

export default class SplitView extends LightningElement {

    @api iconName;
    @api iconSize;
    @api headingTitle;
    @api subtitle;
    @api listTitle;

    @api toggleView() {
        this.collapseSplitView = !this.collapseSplitView;
    }
    
    collapseSplitView = false;

    get toggleButtonIcon() {
        return this.collapseSplitView ? 
            'utility:right' :
            'utility:left'; 
    }

    get containerClasses() {
        let splitViewContainerClasses = 'slds-split-view_container';

        return this.collapseSplitView ? 
            `${splitViewContainerClasses} slds-is-closed` 
            : `${splitViewContainerClasses} slds-is-open`;
    }

    get toggleButtonClasses() {
        let splitViewToggleButtonClasses = 
            'slds-split-view__toggle-button slds-var-p-right_medium';

        return this.collapseSplitView ? 
            `${splitViewToggleButtonClasses} slds-is-closed` :
            `${splitViewToggleButtonClasses} slds-is-open`;
    }

    get isSplitViewOpen() {
        return !this.collapseSplitView;
    }
}