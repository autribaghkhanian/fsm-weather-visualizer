export type State = 'sunny' | 'cloudy' | 'rainy' | 'stormy';

export type Event = 'clouds_gather' | 'rain_falls' | 'storm_hits' | 'sun_appears';

interface Transition {
    from: State;
    to: State;
    on: Event;
}

export const initialState: State = 'sunny';

export const transitions: Transition[] = [
    { from: 'sunny', to: 'cloudy', on: 'clouds_gather' },
    { from: 'cloudy', to: 'rainy', on: 'rain_falls' },
    { from: 'rainy', to: 'stormy', on: 'storm_hits' },
    { from: 'stormy', to: 'sunny', on: 'sun_appears' },
    { from: 'rainy', to: 'sunny', on: 'sun_appears' },
    { from: 'cloudy', to: 'sunny', on: 'sun_appears' }
];