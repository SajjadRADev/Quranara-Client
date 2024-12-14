"use client";

import useToggleState from "@/hooks/useToggleState";

import LogoutModal from "@/components/modal/LogoutModal";

import Button from "@/components/ui/Button";

import LogoutIcon from "@/components/svgs/Logout";

function Logout() {
    const { isOpen, close, open } = useToggleState();

    return (
        <>
            <Button size="lg" rounded="full" variant="neutral-base" onClick={open}>
                <LogoutIcon />
                خروج از حساب کاربری
            </Button>
            <LogoutModal isOpen={isOpen} onClose={close} />
        </>
    );
}

export default Logout;
