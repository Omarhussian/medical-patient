import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ClinicDetails {
    name: string;
    address: string;
    // Add other clinic details as needed
}

interface ClinicContextProps {
    clinicDetails: ClinicDetails;
    setClinicDetails: (details: ClinicDetails) => void;
}

const ClinicContext = createContext<ClinicContextProps | undefined>(undefined);

export const ClinicProvider = ({ children }: { children: ReactNode }) => {
    const [clinicDetails, setClinicDetails] = useState<ClinicDetails>({ name: '', address: '' });

    return (
        <ClinicContext.Provider value={{ clinicDetails, setClinicDetails }}>
            {children}
        </ClinicContext.Provider>
    );
};

export const useClinic = () => {
    const context = useContext(ClinicContext);
    if (!context) {
        throw new Error('useClinic must be used within a ClinicProvider');
    }
    return context;
};