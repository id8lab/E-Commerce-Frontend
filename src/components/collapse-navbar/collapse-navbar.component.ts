import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-collapse-navbar',
  templateUrl: './collapse-navbar.component.html',
  styleUrls: ['./collapse-navbar.component.scss']
})
export class CollapseNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Hide submenus
    $('#body-row .collapse').collapse('hide');

    // Collapse/Expand icon
    $('#collapse-icon').addClass('fa-angle-double-left');

    // Collapse click
    $('[data-toggle=sidebar-colapse]').click(() => {
      this.sidebarCollapse();
    });
  }

  public sidebarCollapse() {
    $('.menu-collapsed').toggleClass('d-none');
    $('.sidebar-submenu').toggleClass('d-none');
    $('.submenu-icon').toggleClass('d-none');
    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');

    // Treating d-flex/d-none on separators with title
    const SeparatorTitle = $('.sidebar-separator-title');
    if (SeparatorTitle.hasClass('d-flex')) {
      SeparatorTitle.removeClass('d-flex');
    } else {
      SeparatorTitle.addClass('d-flex');
    }

    // Collapse/Expand icon
    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
  }

}
