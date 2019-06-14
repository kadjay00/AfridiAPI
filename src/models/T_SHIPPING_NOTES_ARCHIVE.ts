import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SHIPPING_NOTES_ARCHIVE', {schema: 'dbo' } )
export class T_SHIPPING_NOTES_ARCHIVE {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'SHN_SHIPPINGNOTE_N',
        })
    public SHN_SHIPPINGNOTE_N: number;

    @Column('varchar', {
        nullable: false,
        length: 2,
        name: 'SHN_DOCTYPE_C',
        })
    public SHN_DOCTYPE_C: string;

    @Column('varchar', {
        nullable: false,
        length: 18,
        name: 'SHN_DOCNUMBER_C',
        })
    public SHN_DOCNUMBER_C: string;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'SHN_SUPPLIERID_C',
        })
    public SHN_SUPPLIERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SHN_CREATIONDATE_DAT',
        })
    public SHN_CREATIONDATE_DAT: Date | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'SHN_RECEPTION_N',
        })
    public SHN_RECEPTION_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'SHN_RECEPTION_DAT',
        })
    public SHN_RECEPTION_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 12,
        name: 'SHN_TRAILER_NUMBER_C',
        })
    public SHN_TRAILER_NUMBER_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'SHN_TRANSPORT_NUMBER_N',
        })
    public SHN_TRANSPORT_NUMBER_N: number | null;

}
