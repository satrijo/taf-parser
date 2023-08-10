declare const _default: {
    CloudQuantity: {
        BKN: string;
        FEW: string;
        NSC: string;
        OVC: string;
        SCT: string;
        SKC: string;
    };
    CloudType: {
        CB: string;
        CC: string;
        TCU: string;
    };
    DepositBrakingCapacity: {
        NOT_REPORTED: string;
        POOR: string;
        MEDIUM_POOR: string;
        MEDIUM: string;
        MEDIUM_GOOD: string;
        GOOD: string;
        UNRELIABLE: string;
    };
    DepositCoverage: {
        NOT_REPORTED: string;
        LESS_10: string;
        FROM_11_TO_25: string;
        FROM_26_TO_50: string;
        FROM_51_TO_100: string;
    };
    DepositThickness: {
        NOT_REPORTED: string;
        LESS_1_MM: string;
        THICKNESS_40: string;
        CLOSED: string;
    };
    DepositType: {
        NOT_REPORTED: string;
        CLEAR_DRY: string;
        DAMP: string;
        WET_WATER_PATCHES: string;
        RIME_FROST_COVERED: string;
        DRY_SNOW: string;
        WET_SNOW: string;
        ICE: string;
        COMPACTED_SNOW: string;
        FROZEN_RIDGES: string;
        SLUSH: string;
    };
    Descriptive: {
        BC: string;
        BL: string;
        DR: string;
        FZ: string;
        MI: string;
        PR: string;
        SH: string;
        TS: string;
    };
    Error: {
        prefix: string;
    };
    ErrorCode: {
        AirportNotFound: string;
        InvalidMessage: string;
    };
    Indicator: {
        M: string;
        P: string;
    };
    Intensity: {
        "-": string;
        VC: string;
    };
    "intensity-plus": string;
    Phenomenon: {
        BR: string;
        DS: string;
        DU: string;
        DZ: string;
        FC: string;
        FG: string;
        FU: string;
        GR: string;
        GS: string;
        HZ: string;
        IC: string;
        PL: string;
        PO: string;
        RA: string;
        SA: string;
        SG: string;
        SN: string;
        SQ: string;
        SS: string;
        UP: string;
        VA: string;
        TS: string;
    };
    Remark: {
        AO1: string;
        AO2: string;
        ALQDS: string;
        Barometer: string[];
        BASED: string;
        Ceiling: {
            Height: string;
            Second: {
                Location: string;
            };
        };
        DSNT: string;
        FCST: string;
        FUNNELCLOUD: string;
        Hail: {
            "0": string;
            LesserThan: string;
        };
        Hourly: {
            Maximum: {
                Temperature: string;
                Minimum: {
                    Temperature: string;
                };
            };
            Minimum: {
                Temperature: string;
            };
            Temperature: {
                "0": string;
                Dew: {
                    Point: string;
                };
            };
        };
        Ice: {
            Accretion: {
                Amount: string;
            };
        };
        HVY: string;
        LGT: string;
        LTG: string;
        MOD: string;
        Obscuration: string;
        ON: string;
        NXT: string;
        PeakWind: string;
        Precipitation: {
            Amount: {
                Hourly: string;
                "3": {
                    "6": string;
                };
                "24": string;
            };
            Beg: {
                "0": string;
                End: string;
            };
            End: string;
        };
        Pressure: {
            Tendency: string;
        };
        PRESFR: string;
        PRESRR: string;
        Second: {
            Location: {
                Visibility: string;
            };
        };
        Sea: {
            Level: {
                Pressure: string;
            };
        };
        Sector: {
            Visibility: string;
        };
        SLPNO: string;
        Snow: {
            Depth: string;
            Increasing: {
                Rapidly: string;
            };
            Pellets: string;
        };
        Sunshine: {
            Duration: string;
        };
        Surface: {
            Visibility: string;
        };
        Thunderstorm: {
            Location: {
                "0": string;
                Moving: string;
            };
        };
        Tornadic: {
            Activity: {
                Beginning: string;
                BegEnd: string;
                Ending: string;
            };
        };
        TORNADO: string;
        Tower: {
            Visibility: string;
        };
        Variable: {
            Prevailing: {
                Visibility: string;
            };
            Sky: {
                Condition: {
                    "0": string;
                    Height: string;
                };
            };
        };
        Virga: {
            Direction: string;
        };
        WATERSPOUT: string;
        Water: {
            Equivalent: {
                Snow: {
                    Ground: string;
                };
            };
        };
        WindShift: {
            "0": string;
            FROPA: string;
        };
    };
    MetarFacade: {
        InvalidIcao: string;
    };
    Converter: {
        D: string;
        E: string;
        ENE: string;
        ESE: string;
        N: string;
        NE: string;
        NNE: string;
        NNW: string;
        NSC: string;
        NW: string;
        S: string;
        SE: string;
        SSE: string;
        SSW: string;
        SW: string;
        U: string;
        W: string;
        WNW: string;
        WSW: string;
    };
    WeatherChangeType: {
        FM: string;
        BECMG: string;
        TEMPO: string;
        PROB: string;
    };
    TimeIndicator: {
        AT: string;
        FM: string;
        TL: string;
    };
    ToString: {
        airport: string;
        altimeter: string;
        amendment: string;
        clouds: string;
        day: {
            month: string;
            hour: string;
        };
        deposit: {
            braking: string;
            coverage: string;
            thickness: string;
            type: string;
        };
        descriptive: string;
        dew: {
            point: string;
        };
        end: {
            day: {
                month: string;
            };
            hour: {
                day: string;
            };
        };
        height: {
            feet: string;
            meter: string;
        };
        intensity: string;
        indicator: string;
        message: string;
        name: string;
        phenomenons: string;
        probability: string;
        quantity: string;
        remark: string;
        report: {
            time: string;
        };
        runway: {
            info: string;
        };
        start: {
            day: {
                month: string;
            };
            hour: {
                day: string;
            };
            minute: string;
        };
        temperature: {
            "0": string;
            max: string;
            min: string;
        };
        trend: string;
        trends: string;
        visibility: {
            main: string;
            min: {
                "0": string;
                direction: string;
            };
            max: string;
        };
        vertical: {
            visibility: string;
        };
        weather: {
            conditions: string;
        };
        wind: {
            direction: {
                degrees: string;
            };
            gusts: string;
            min: {
                variation: string;
            };
            max: {
                variation: string;
            };
            speed: string;
            unit: string;
        };
    };
};
export default _default;
