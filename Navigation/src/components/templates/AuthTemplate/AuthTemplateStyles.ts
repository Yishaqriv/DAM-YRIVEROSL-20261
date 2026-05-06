import React from "react";

interface AuthTemplateProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

const AuthTemplate = ({title, subtitle, children}): AuthTemplate