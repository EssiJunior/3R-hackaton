"use client";
import React from "react";
import {
    Modal,
    ModalTrigger,
} from "./ui/AnimatedModal";

export function AnimatedModal({ children, trigger }: {
    children?: React.ReactNode; trigger: React.ReactNode
}) {
    return (
        <div className="flex items-center justify-center">
            <Modal>
                <ModalTrigger className="flex items-start justify-start w-full">
                    {trigger}
                </ModalTrigger>
                {children}
            </Modal>
        </div>
    );
}