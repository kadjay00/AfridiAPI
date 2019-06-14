import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FALCONFIRMWARE', {schema: 'dbo' } )
export class T_FALCONFIRMWARE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'FFI_FWID_C',
        })
    public FFI_FWID_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 6,
        name: 'FFI_FIRMWARE_C',
        })
    public FFI_FIRMWARE_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'FFI_RELEASE_DAT',
        })
    public FFI_RELEASE_DAT: Date;

    @Column('varchar', {
        nullable: false,
        length: 1,
        name: 'FFI_MANDATORY_C',
        })
    public FFI_MANDATORY_C: string;

    @Column('varchar', {
        nullable: false,
        length: 1,
        name: 'FFI_ACTIVE_C',
        })
    public FFI_ACTIVE_C: string;

    @Column('varchar', {
        nullable: true,
        name: 'FFI_PREUPDATECOMMAND_C',
        })
    public FFI_PREUPDATECOMMAND_C: string | null;

}
