/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";

export function DropdownMenu3() {
    return <>
        {/*begin::Naviigation*/}
        <ul class="navi">
            <li class="navi-header font-weight-bold py-5">
                <span class="font-size-lg">Add New:</span>
                <i class="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right"
                   title="Click to learn more..."></i>
            </li>
            <li class="navi-separator mb-3 opacity-70"></li>
            <li class="navi-item">
                <a href="#" class="navi-link">
                    <span class="navi-icon"><i class="flaticon2-shopping-cart-1"></i></span>
                    <span class="navi-text">Order</span>
                </a>
            </li>
            <li class="navi-item">
                <a href="#" class="navi-link">
                    <span class="navi-icon"><i class="navi-icon flaticon2-calendar-8"></i></span>
                    <span class="navi-text">Members</span>
                    <span class="navi-label">
                <span class="label label-light-danger label-rounded font-weight-bold">3</span>
            </span>
                </a>
            </li>
            <li class="navi-item">
                <a href="#" class="navi-link">
                    <span class="navi-icon"><i class="navi-icon flaticon2-telegram-logo"></i></span>
                    <span class="navi-text">Project</span>
                </a>
            </li>
            <li class="navi-item">
                <a href="#" class="navi-link">
                    <span class="navi-icon"><i class="navi-icon flaticon2-new-email"></i></span>
                    <span class="navi-text">Record</span>
                    <span class="navi-label">
                <span class="label label-light-success label-rounded font-weight-bold">5</span>
            </span>
                </a>
            </li>
            <li class="navi-separator mt-3 opacity-70"></li>
            <li class="navi-footer pt-5 pb-4">
                <a class="btn btn-light-primary font-weight-bolder btn-sm" href="#">More options</a>
                <a class="btn btn-clean font-weight-bold btn-sm d-none" href="#" data-toggle="tooltip"
                   data-placement="right" title="Click to learn more...">Learn more</a>
            </li>
        </ul>
        {/*end::Naviigation*/}
    </>
}
