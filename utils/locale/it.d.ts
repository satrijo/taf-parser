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
        AC: string;
        AS: string;
        CB: string;
        CC: string;
        CI: string;
        CS: string;
        CU: string;
        NS: string;
        SC: string;
        ST: string;
        TCU: string;
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
        VRB: string;
        W: string;
        WNW: string;
        WSW: string;
    };
    DepositBrakingCapacity: {
        GOOD: string;
        MEDIUM: string;
        MEDIUM_GOOD: string;
        MEDIUM_POOR: string;
        NOT_REPORTED: string;
        POOR: string;
        UNRELIABLE: string;
    };
    DepositCoverage: {
        FROM_11_TO_25: string;
        FROM_26_TO_50: string;
        FROM_51_TO_100: string;
        LESS_10: string;
        NOT_REPORTED: string;
    };
    DepositThickness: {
        CLOSED: string;
        LESS_1_MM: string;
        NOT_REPORTED: string;
        THICKNESS_10: string;
        THICKNESS_15: string;
        THICKNESS_20: string;
        THICKNESS_25: string;
        THICKNESS_30: string;
        THICKNESS_35: string;
        THICKNESS_40: string;
    };
    DepositType: {
        CLEAR_DRY: string;
        COMPACTED_SNOW: string;
        DAMP: string;
        DRY_SNOW: string;
        FROZEN_RIDGES: string;
        ICE: string;
        NOT_REPORTED: string;
        RIME_FROST_COVERED: string;
        WET_SNOW: string;
        WET_WATER_PATCHES: string;
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
    MetarFacade: {
        InvalidIcao: string;
    };
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
        PY: string;
        RA: string;
        SA: string;
        SG: string;
        SN: string;
        SQ: string;
        SS: string;
        TS: string;
        UP: string;
        VA: string;
    };
    Remark: {
        AO1: string;
        AO2: string;
        BASED: string;
        Ceiling: {
            Height: string;
            Second: {
                Location: string;
            };
        };
        FCST: string;
        FUNNELCLOUD: string;
        Hail: {
            "0": string;
            LesserThan: string;
        };
        HVY: string;
        LGT: string;
        MOD: string;
        NXT: string;
        Obscuration: string;
        ON: string;
        PeakWind: string;
        Precipitation: {
            Beg: {
                End: string;
            };
        };
        PRESFR: string;
        PRESRR: string;
        Sea: {
            Level: {
                Pressure: string;
            };
        };
        Second: {
            Location: {
                Visibility: string;
            };
        };
        Sector: {
            Visibility: string;
        };
        SLPNO: string;
        Snow: {
            Increasing: {
                Rapidly: string;
            };
            Pellets: string;
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
                BegEnd: string;
                Beginning: string;
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
        VIRGA: string;
        Virga: {
            Direction: string;
        };
        WATERSPOUT: string;
        WindShift: {
            "0": string;
            FROPA: string;
        };
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
        auto: string;
        cavok: string;
        clouds: string;
        day: {
            hour: string;
            month: string;
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
        indicator: string;
        intensity: string;
        message: string;
        name: string;
        nosig: string;
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
        type: string;
        vertical: {
            visibility: string;
        };
        visibility: {
            main: string;
            max: string;
            min: {
                "0": string;
                direction: string;
            };
        };
        weather: {
            conditions: string;
        };
        wind: {
            direction: {
                "0": string;
                degrees: string;
            };
            gusts: string;
            max: {
                variation: string;
            };
            min: {
                variation: string;
            };
            speed: string;
            unit: string;
        };
    };
    WeatherChangeType: {
        BECMG: string;
        FM: string;
        PROB: string;
        TEMPO: string;
    };
};
export default _default;
