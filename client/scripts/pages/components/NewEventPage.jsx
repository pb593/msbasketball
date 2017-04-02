import React, { Component, PropTypes } from 'react';
import {Button} from 'react-bootstrap';
import InfiniteCalendar, {Calendar, withMultipleDates, defaultMultipleDateInterpolation} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

class NewEventPage extends Component {

    constructor (props) {
        super(props);
        this.selectedDates = {};
        this.addNewEvent = this.addNewEvent.bind(this);
        this.onCalendarSelect = this.onCalendarSelect.bind(this);
    }

    addNewEvent (jsEvent) {
        jsEvent.preventDefault();
        Object.keys(this.selectedDates).forEach((date) => (this.props.addEvent(date)));
    }

    onCalendarSelect(date) {
        if (date in this.selectedDates)
            delete this.selectedDates[date];
        else
            this.selectedDates[date] = date
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addNewEvent}>
                    <InfiniteCalendar
                        Component={withMultipleDates(Calendar)}
                        selected={[]}
                        width={window.innerWidth/5}
                        height={window.innerHeight/4}
                        interpolateSelection={defaultMultipleDateInterpolation}
                        onSelect={this.onCalendarSelect}
                        displayOptions={{
                            shouldHeaderAnimate: false
                        }}
                    />
                    <Button type="submit">
                        Create
                    </Button>
                </form>
            </div>
        )
    }
}

NewEventPage.propTypes = {
    addEvent: PropTypes.func.isRequired
};

export default NewEventPage