/**
 *
 * PluginIcon
 *
 */

import React from 'react';
import Puzzle from '@strapi/icons/Puzzle';

const PluginIcon = () => <img width="16" src="data:image/png;base64,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b24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOjY4Mjg5YjdiLWU2YTItNDYyNC1iYmJlLTMzNGE3MDc5ODk4MiIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiZjlkMzVmYS1jYWQyLTRhZWYtOWI3NS1kYzg3YWZlM2VmMDMiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3MTZlMGEzZi03MWUyLTQwNzAtYjE0NS01ODk1MTA1NmE4YzkiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJXaW5kb3dzIgogICBHSU1QOlRpbWVTdGFtcD0iMTY0OTY5MzAxODQ3NTM1MSIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjMwIgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmQ1NmM1N2EzLWRhZGYtNDNjYy1iODhlLWRlYTU3YTc4OWE2MyIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChXaW5kb3dzKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMi0wNC0xMVQxODowMzozOCIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz7LuMepAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH5gQLEAMmy04GsAAAAnhJREFUSMe1lltIFFEYx39nnQS76AYhG0SKJAhrr7EQm3ZjQ6gliiAXX6L2KW1fokACIYSgHrboAkn1UBoEPcyLuEmwJsUSkuQuZBdtfYg2UNGE3Q206WHONKPtDG7s/mGYb/7zP9+cOee7HIEDAsFIHdABtADNgEe+ygApYAR4HFOjM3Y+hI3jeqAXaGd9GAC6Y2o0bfsBLXihEzgLVCxAwzJUUQQUyLlhWj5+A0JCvTmrWDQ3gEoAN/+FKsArbS9wHOhzWQSVlAEuy5qXBcYS9f5lTh+Epy91+1QrPIvDuaPmiE9p2LYVXryFpbzU7YeazbC8AoOv4cciE9AK9LlkKJrRcrLNdHbYDy4B/j2QzevXUg4C+6Bhu6k7tFd/566GS2cA+IpoDwQjdYqMc2fkf0H/sLPmybAekw97rGyHIpPIErgCbl1cPbhmC1w7D0OjEH9f+APhY7DDA1Orcq5FkRlqQtOg67pu913R74tLcPm28x9MTsP4Bxj7bGWbFUv622ODAn45j5mMfm/cCdWbzOdXqUJ1waP8Q8UTpp0Yh98afEnDAZ/OTUzCuyR4G/VrLKnrhE0tCgQj3wHPEFpJ419FcA8yLlkVy4WUS5Zc5kvsWe7MiJCJlq4Hjhi1w4JaNHw2TmaBNwUWPw0M6ma9kLWo36n2R9FoWsMtAz0Ixhx6REyNhowJdwNZO+VVBD/XcM+dnWelT31FZCcK26nngLsIVoydAx45b0HY6G4VBjP1MZHc1eSbA9oKjUgDCwjmEdxBkLN33hlTow9se3IgGAkB94GNRQZOVs6830pWrFXJPxkAaoHdRTT9EzE1OrquU0Upjy1/AMZxutLtUlKXAAAAAElFTkSuQmCC" />;

export default PluginIcon;
