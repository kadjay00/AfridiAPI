import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRICEAUDIT_DETAIL', {schema: 'dbo' } )
export class T_PRICEAUDIT_DETAIL {

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 10,
        scale: 0,
        name: 'PAD_AUDIT_N',
        })
    public PAD_AUDIT_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PAD_RECORD_N',
        })
    public PAD_RECORD_N: number;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PAD_IDNUMBER_C',
        })
    public PAD_IDNUMBER_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PAD_DEPARTMENT_N',
        })
    public PAD_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'PAD_GIBREF_C',
        })
    public PAD_GIBREF_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'PAD_EAN_N',
        })
    public PAD_EAN_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PAD_PV_D',
        })
    public PAD_PV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PAD_PVREG_D',
        })
    public PAD_PVREG_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PAD_PVPROMO_D',
        })
    public PAD_PVPROMO_D: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'PAD_LASTSOLDEAN_N',
        })
    public PAD_LASTSOLDEAN_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PAD_STATUS_N',
        })
    public PAD_STATUS_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 6,
        name: 'PAD_ACTIONCODE_C',
        })
    public PAD_ACTIONCODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PAD_LABEL_C',
        })
    public PAD_LABEL_C: string | null;

}
