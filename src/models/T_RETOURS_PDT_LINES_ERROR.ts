import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_RETOURS_PDT_LINES_ERROR', {schema: 'dbo' } )
export class T_RETOURS_PDT_LINES_ERROR {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'RLE_REPRISE_N',
        })
    public RLE_REPRISE_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'RLE_RECORD_N',
        })
    public RLE_RECORD_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'RLE_SEQUENCE_N',
        })
    public RLE_SEQUENCE_N: number;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'RLE_ERRORID_C',
        })
    public RLE_ERRORID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'RLE_ERRORPARAM_C',
        })
    public RLE_ERRORPARAM_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'RLE_ERRORDATE_DAT',
        })
    public RLE_ERRORDATE_DAT: Date | null;

    @Column('char', {
        nullable: false,
        name: 'RLE_TYPE_C',
        })
    public RLE_TYPE_C: string;

    @Column('char', {
        nullable: true,
        name: 'RLE_CORRECTED_C',
        })
    public RLE_CORRECTED_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'RLE_CORRDATE_DAT',
        })
    public RLE_CORRDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'RLE_CORRUSER_C',
        })
    public RLE_CORRUSER_C: string | null;

}
