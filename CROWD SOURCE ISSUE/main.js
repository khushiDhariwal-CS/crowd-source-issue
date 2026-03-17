document.addEventListener('DOMContentLoaded', function () {
    // Sign In button alert
    document.getElementById('signInBtn').onclick = function () {
        alert('Sign In function is not implemented in this demo.');
    };

    // Language Change
    document.getElementById('languageSelect').onchange = function () {
        const lang = this.value;
        alert('Language changed to: ' + (lang === 'en' ? 'English' : 'Hindi'));
        if (lang === 'hi') {
            document.querySelector('.banner-title').textContent = 'पुनर्वास प्रक्रिया प्रवाह';
            document.querySelector('.banner-subtitle').textContent = 'नागरिक शिकायत दर्ज करता है';
            document.querySelector('.banner-question').textContent = 'क्या आप सरकारी एजेंसी की सेवाओं से नाखुश हैं?';
            document.querySelector('.banner-action strong').textContent = 'अपनी शिकायत दर्ज करें';
        } else {
            document.querySelector('.banner-title').textContent = 'Redress Process Flow';
            document.querySelector('.banner-subtitle').textContent = 'Citizen Lodges Complaint';
            document.querySelector('.banner-question').textContent = 'ARE YOU AGGRIEVED WITH THE SERVICES OF GOVERNMENT AGENCY?';
            document.querySelector('.banner-action strong').textContent = 'LODGE YOUR GRIEVANCE HERE';
        }
    };

    // Grievance button redirects
    document.getElementById('grievanceBtn').onclick = function () {
        window.location.href = 'greviences.html';
    };

    // Banner arrows hover effect
    document.querySelectorAll('.arrow').forEach(function (arrow) {
        arrow.addEventListener('mouseenter', function () {
            arrow.style.background = '#ffe7ee';
        });
        arrow.addEventListener('mouseleave', function () {
            arrow.style.background = '#fff';
        });
    });

    // Animate cards sliding in sequence
    var cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, idx) => {
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.animation = 'slideDown 0.8s cubic-bezier(.56,1.59,.08,.87)';
        }, idx * 200 + 500);
    });

    // Feature card button alerts
    document.getElementById('card1').querySelector('.feature-btn').onclick = function () {
        alert('Register/Login clicked!');
    };
    document.getElementById('card2').querySelector('.feature-btn').onclick = function () {
        alert('View Status clicked!');
    };
    document.getElementById('card3').querySelector('.feature-btn').onclick = function () {
        alert('Contact Us clicked!');
    };

    // Table pagination and search
    const table = document.querySelector('table tbody');
    const rows = Array.from(table.querySelectorAll('tr'));
    const entriesSelect = document.getElementById('entries');
    const searchInput = document.getElementById('search');
    const pageFooter = document.querySelector('.page-footer');
    let rowsPerPage = parseInt(entriesSelect.value, 10);
    let currentSearch = '';
    let sortAscending = true;

    function sortRows(rowsToSort) {
        return rowsToSort.sort((a, b) => {
            const textA = a.cells[1].textContent.trim().toLowerCase();
            const textB = b.cells[1].textContent.trim().toLowerCase();
            if (textA < textB) return sortAscending ? -1 : 1;
            if (textA > textB) return sortAscending ? 1 : -1;
            return 0;
        });
    }

    function renderRows() {
        let filteredRows = rows.filter(row => {
            const text = row.textContent.toLowerCase();
            return text.includes(currentSearch.toLowerCase());
        });
        filteredRows = sortRows(filteredRows);
        filteredRows.forEach((row, idx) => {
            row.style.display = idx < rowsPerPage ? '' : 'none';
        });
        rows.forEach(row => {
            if (!filteredRows.includes(row)) row.style.display = 'none';
        });
        const start = filteredRows.length === 0 ? 0 : 1;
        const end = Math.min(rowsPerPage, filteredRows.length);
        pageFooter.textContent = `Showing ${start} to ${end} of ${filteredRows.length} entries`;
    }

    searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            sortAscending = !sortAscending;
            renderRows();
        }
    });
    entriesSelect.addEventListener('change', function () {
        rowsPerPage = parseInt(this.value, 10);
        renderRows();
    });
    searchInput.addEventListener('input', function () {
        currentSearch = this.value.trim();
        renderRows();
    });

    renderRows();

    // Nodal PG Officers dropdown toggle
    const nodalBtn = document.getElementById('nodalOfficersBtn');
    const dropdown = document.getElementById('nodalDropdown');

    nodalBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function () {
        dropdown.style.display = 'none';
    });

    // Optional: Link clicks can use default behavior or JS redirection.

});
document.addEventListener('DOMContentLoaded', function () {
    const nodalBtn = document.getElementById('nodalOfficersBtn');
    const dropdown = document.getElementById('nodalDropdown');

    nodalBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        // Toggle dropdown visibility on click
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        } else {
            dropdown.style.display = 'block';
        }
    });

    // Close the dropdown when clicking outside
    document.addEventListener('click', function () {
        dropdown.style.display = 'none';
    });
});
 document.getElementById('authorityBtn').onclick = function () {
                window.location.href = 'nodalappeal.html';
            };    
            document.getElementById('grievanceBtn').onclick = function () {
                window.location.href = 'greviences.html';
            }; 
             document.querySelectorAll('.grievance-profile .upvote-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            let upvoteCounter = this.nextElementSibling;
            let count = parseInt(upvoteCounter.textContent, 10);
            upvoteCounter.textContent = count + 1;
            this.disabled = true;
            this.classList.add('voted');
            this.textContent = "▲ Voted";
        });
    });

    document.getElementById('authorityBtn').onclick = function () {
        window.location.href = 'nodalappeal.html';
    };
    document.getElementById('viewStatusBtn').addEventListener('click', () => {
      location.href = 'profile.html';
    });