import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ECOM_ITEMTYPE', {schema: 'dbo' } )
export class T_ECOM_ITEMTYPE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 1,
        name: 'ITT_TYPE_C',
        })
    public ITT_TYPE_C: string;

    @Column('varchar', {
        nullable: false,
        length: 35,
        name: 'ITT_DESCRIPTIONNL_C',
        })
    public ITT_DESCRIPTIONNL_C: string;

    @Column('varchar', {
        nullable: false,
        length: 35,
        name: 'ITT_DESCRIPTIONFR_C',
        })
    public ITT_DESCRIPTIONFR_C: string;

    @Column('varchar', {
        nullable: false,
        length: 2,
        name: 'ITT_TYPEPOS_C',
        })
    public ITT_TYPEPOS_C: string;

    @Column('varchar', {
        nullable: false,
        length: 1,
        name: 'ITT_SERVICE_C',
        })
    public ITT_SERVICE_C: string;

    @Column('varchar', {
        nullable: false,
        length: 1,
        name: 'ITT_EMPTYUNIT_C',
        })
    public ITT_EMPTYUNIT_C: string;

    @Column('varchar', {
        nullable: false,
        length: 1,
        name: 'ITT_SETPREPQTY_C',
        })
    public ITT_SETPREPQTY_C: string;

    @Column('varchar', {
        nullable: false,
        length: 1,
        name: 'ITT_USEORDDESCR_C',
        })
    public ITT_USEORDDESCR_C: string;

    @Column('smallint', {
        nullable: false,
        name: 'ITT_TICKETDIVIDE_N',
        })
    public ITT_TICKETDIVIDE_N: number;

    @Column('varchar', {
        nullable: false,
        length: 1,
        name: 'ITT_ACCUMULATION_C',
        })
    public ITT_ACCUMULATION_C: string;

    @Column('varchar', {
        nullable: false,
        length: 1,
        name: 'ITT_USEORDTAXCODE_C',
        })
    public ITT_USEORDTAXCODE_C: string;

    @Column('varchar', {
        nullable: false,
        length: 1,
        name: 'ITT_EANPROMO_C',
        })
    public ITT_EANPROMO_C: string;

    @Column('varchar', {
        nullable: false,
        length: 1,
        name: 'ITT_FLAGDELETE_C',
        })
    public ITT_FLAGDELETE_C: string;

}
